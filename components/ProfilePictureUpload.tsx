'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePictureUpload() {
  const [profilePicture, setProfilePicture] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!profilePicture) {
      toast({ title: 'Por favor, insira a URL da nova foto de perfil.' });
      return;
    }

    try {
      const userId = sessionStorage.getItem('userId'); // ou como você armazena o ID do usuário

      if (!userId) {
        toast({ title: 'Usuário não autenticado.' });
        return;
      }

      const response = await fetch('/api/profile/update-picture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, profilePicture }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('profilePicture', profilePicture);
        toast({ title: 'Foto de perfil atualizada com sucesso!' });
        router.push('/profile');
      } else {
        toast({ title: data.error || 'Erro ao atualizar foto de perfil.' });
      }
    } catch (error) {
      console.error('Erro ao atualizar foto de perfil:', error);
      toast({ title: 'Erro ao atualizar foto de perfil.' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="URL da nova foto de perfil"
        value={profilePicture}
        onChange={(e) => setProfilePicture(e.target.value)}
        required
      />
      <Button type="submit" className="w-full">
        Atualizar Foto de Perfil
      </Button>
    </form>
  );
}
