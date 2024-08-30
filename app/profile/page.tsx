'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { PencilIcon } from '@heroicons/react/24/solid';
import CadastrarEmpresaModal from '@/components/empresa';

export default function Profile() {
    const [profile, setProfile] = useState<any>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState<'about' | 'contact' | false>(false);
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
                    headers: { 'Authorization': `Bearer ${token}` },
                });

                const data = await response.json();

                if (response.ok) {
                    setProfile(data);
                    setImagePreview(data.profile_picture);
                    setNewAbout(data.about || '');
                    setNewContact(data.contact || '');
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
            setImagePreview(URL.createObjectURL(file));
        } else {
            setSelectedFile(null);
            setImagePreview(null);
        }
    };

    const handleImageClick = () => {
        document.getElementById('fileInput')?.click();
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
        formData.append('userId', profile?.id);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` },
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setProfile((prevProfile: any) => ({
                    ...prevProfile,
                    profile_picture: data.profilePicture,
                }));
                sessionStorage.setItem('profilePicture', data.profilePicture);
                toast({ title: 'Imagem atualizada com sucesso!' });
                window.location.reload();
            } else {
                toast({ title: data.error || 'Erro ao atualizar imagem.' });
            }
        } catch (error) {
            console.error('Erro ao fazer upload da imagem:', error);
            toast({ title: 'Erro ao fazer upload da imagem.' });
        }
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

    return (
        <div className="grid gap-6 max-w-3xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
            <Dialog>
      <DialogTrigger asChild>
        <Avatar className="h-20 w-20 cursor-pointer border-primary">
          <AvatarImage src={imagePreview || profile?.profile_picture} alt="User Avataar" />
          <AvatarFallback />
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Alterar Imagem de Perfil</DialogTitle>
          <DialogDescription>
            Selecione uma nova imagem para o seu perfil.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            type="file"
            id="fileInput"
            accept="image/jpeg, image/png"
            onChange={handleFileChange}
          />
          {imagePreview && (
            <div className="mt-2">
              <img src={imagePreview} alt="Preview" className="rounded-lg" />
            </div>
          )}
        </div>
        <DialogFooter>
         <Button onClick={handleUpload}>Atualizar Imagem de Perfil</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
                <div className="grid gap-1">
                    <h2 className="text-2xl font-bold">{profile?.name}</h2>
                </div>
            </div>
            <div className="grid gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Sobre
                            <Dialog>
                                <DialogTrigger>
                                    <PencilIcon className="w-5 h-5 ml-2 cursor-pointer" onClick={() => setIsEditing('about')} />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Editar Sobre</DialogTitle>
                                    </DialogHeader>
                                    {isEditing === 'about' && (
                                        <>
                                            <Textarea
                                                value={newAbout}
                                                onChange={(e) => setNewAbout(e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                            <DialogFooter>
                                                <Button onClick={handleSave} className="mr-2">Salvar</Button>
                                                <Button onClick={() => setIsEditing(false)} variant="outline">Cancelar</Button>
                                            </DialogFooter>
                                        </>
                                    )}
                                </DialogContent>
                            </Dialog>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p> {profile?.about || "comece editando sua biografia"}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>
                            Contatos
                            <Dialog>
                                <DialogTrigger>
                                    <PencilIcon className="w-5 h-5 ml-2 cursor-pointer" onClick={() => setIsEditing('contact')} />
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Editar Contatos</DialogTitle>
                                    </DialogHeader>
                                    {isEditing === 'contact' && (
                                        <>
                                            <Input
                                                type="text"
                                                value={newContact}
                                                onChange={(e) => setNewContact(e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                            <DialogFooter>
                                                <Button onClick={handleSave} className="mr-2">Salvar</Button>
                                                <Button onClick={() => setIsEditing(false)} variant="outline">Cancelar</Button>
                                            </DialogFooter>
                                        </>
                                    )}
                                </DialogContent>
                            </Dialog>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p>  {profile?.contact || "comece editando seus dados"}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}