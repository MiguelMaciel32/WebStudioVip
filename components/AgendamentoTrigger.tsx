"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import { useToast } from "./ui/use-toast";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function AgendamentoTrigger({
  children,
}: {
  children: React.ReactNode;
}) {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { toast } = useToast();
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Agendamento</SheetTitle>
          <SheetDescription>
            Preencha o formulário abaixo para escolher uma data e horário
            conveniente para sua consulta. Garantimos um atendimento rápido e
            eficiente.
          </SheetDescription>
        </SheetHeader>
        <section className="grid gap-4 py-4">
          <section className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome
            </Label>
            <Input
              id="name"
              className="col-span-3"
              placeholder="John Doe"
              type="text"
            />
          </section>
          <section className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="tel" className="text-right">
              Telefone
            </Label>
            <Input
              id="tel"
              className=" col-span-3 "
              placeholder="+55 (**) *********"
              type="tel"
            />
            <Label htmlFor="date" className="text-right">
              Data
            </Label>
            <Input className="w-full col-span-3" id="date" type="date" />
          </section>
          <section className="flex">
            <Label className="text-right mx-5 mt-3 ">Horario</Label>
            <Input type="time" className="w-full col-span-2 " />
          </section>
        </section>
        <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="w-full"
              onClick={() => {
                toast({ title: "Agendamento realizado com sucesso!" });
              }}
            >
              Agendar
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
