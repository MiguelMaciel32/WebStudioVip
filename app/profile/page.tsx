'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { PencilIcon } from '@heroicons/react/24/solid';

export default function Profile() {
    const [profile, setProfile] = useState<any>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null); // Pré-visualização da imagem
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [newAbout, setNewAbout] = useState<string>('');
    const [newContact, setNewContact] = useState<string>('');
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = sessionStorage.getItem('token');

            if (!token) {
                toast({ title: 'Você precisa estar logado para acessar esta página.' });
                router.push('/login');
                return;
            }

            try {
                const response = await fetch('/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                const data = await response.json();

                if (response.ok) {
                    setProfile(data);
                    setImagePreview(data.profile_picture); // Define a imagem de perfil no início
                    setNewAbout(data.about || ''); // Define a bio inicial
                    setNewContact(data.contact || ''); // Define o contato inicial
                } else {
                    toast({ title: data.error || 'Erro ao carregar perfil.' });
                    router.push('/login');
                }
            } catch (error) {
                console.error('Erro ao buscar perfil:', error);
                toast({ title: 'Erro ao buscar perfil.' });
            }
        };

        fetchProfile();
    }, [router]);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files?.[0]) {
            const file = event.target.files[0];
            setSelectedFile(file);
            setImagePreview(URL.createObjectURL(file)); // Atualiza a pré-visualização da imagem
        } else {
            setSelectedFile(null);
            setImagePreview(null);
        }
    };

    const handleImageClick = () => {
        document.getElementById('fileInput')?.click(); // Simula o clique no input de arquivo
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            toast({ title: 'Nenhum arquivo selecionado.' });
            return;
        }

        const confirmUpload = window.confirm('Você tem certeza que deseja atualizar a imagem do perfil?');

        if (!confirmUpload) return;

        const token = sessionStorage.getItem('token');
        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('userId', profile?.id); // Inclua o ID do usuário

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setProfile((prevProfile: any) => ({
                    ...prevProfile,
                    profile_picture: data.profilePicture,
                }));
                sessionStorage.setItem('profilePicture', data.profilePicture); // Atualize o sessionStorage
                toast({ title: 'Imagem atualizada com sucesso!' });

                // Recarrega a página após o upload
                window.location.reload();
            } else {
                toast({ title: data.error || 'Erro ao atualizar imagem.' });
            }
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            toast({ title: 'Erro ao fazer upload da imagem.' });
        }
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        if (!newAbout.trim() || !newContact.trim()) {
            toast({ title: 'Por favor, preencha todos os campos.' });
            return;
        }
    
        const token = sessionStorage.getItem('token');
        const response = await fetch('/api/update-profile', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: profile?.id,
                about: newAbout,
                contact: newContact,
            }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
            setProfile((prevProfile: any) => ({
                ...prevProfile,
                about: newAbout,
                contact: newContact,
            }));
            setIsEditing(false);
            toast({ title: 'Perfil atualizado com sucesso!' });
        } else {
            toast({ title: data.error || 'Erro ao atualizar perfil.' });
        }
    };
    

    if (!profile) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-20 h-20 border-4 border-transparent border-t-black rounded-full animate-spin">
                    <div className="w-16 h-16 border-4 border-transparent border-t-gray-800 rounded-full animate-spin"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <div className="w-full max-w-md p-6 space-y-6 bg-card rounded-lg shadow-lg">
                <div className="flex flex-col items-center gap-4">
                    <div className="relative flex-shrink-0">
                        <div
                            onClick={handleImageClick}
                            className="w-32 h-32 cursor-pointer overflow-hidden rounded-full border-2 border-gray-300 bg-gray-100"
                        >
                            <img
                                src={imagePreview || profile.profile_picture}
                                alt="Profile Picture"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <input
                            type="file"
                            id="fileInput"
                            name="file"
                            accept="image/jpeg, image/png"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                    <div>
                        <div className="text-card-foreground font-medium text-xl">{profile.name}</div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className="grid gap-1">
                        <div className="text-muted-foreground text-sm font-medium flex items-center">
                            Sobre
                            <PencilIcon className="w-5 h-5 ml-2 cursor-pointer" onClick={() => setIsEditing(true)} />
                        </div>
                        {isEditing ? (
                            <textarea
                                value={newAbout}
                                onChange={(e) => setNewAbout(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        ) : (
                            <div className="text-card-foreground">{profile.about || 'Não definido'}</div>
                        )}
                    </div>
                    <div className="grid gap-1">
                        <div className="text-muted-foreground text-sm font-medium flex items-center">
                            Contato
                            <PencilIcon className="w-5 h-5 ml-2 cursor-pointer" onClick={() => setIsEditing(true)} />
                        </div>
                        {isEditing ? (
                            <input
                                type="text"
                                value={newContact}
                                onChange={(e) => setNewContact(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        ) : (
                            <div className="text-card-foreground">{profile.contact || 'Não definido'}</div>
                        )}
                    </div>
                </div>
                {isEditing && (
                    <div className="mt-4">
                        <Button onClick={handleSave}>Salvar</Button>
                    </div>
                )}
                {selectedFile && !isEditing && (
                    <div className="mt-4">
                        <Button onClick={handleUpload}>Atualizar Imagem</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
