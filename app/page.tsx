import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SparkleIcon, Sparkles, StarsIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SearchInputWithIcon from "@/components/Input-Icon";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <section className="w-full py-12 md:py-24 lg:py-1">
          <div className="container  grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <Image
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              height="550"
              src="/foto.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                Studio Vip
              </h1>
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h5>
              <Link href="/login">
                <Button className="gap-2 items-center">
                  <Sparkles size={16} />
                  Inicie sua jornada!
                </Button>
              </Link>
            </div>
          </div>
          <div>
            <div className="text-2xl gap-6 flex mt-6 mx-auto w-fit p-8 dark:bg-zinc-950 border rounded-lg  ">
              <Select>
                <SelectTrigger className="flex-1 md:w-[280px]">
                  <SelectValue placeholder="Localizacao" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="loc1">Barueri</SelectItem>
                  <SelectItem value="loc2">Itapevi</SelectItem>
                  <SelectItem value="loc3">Cotia</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="flex-1 md:w-[280px]">
                  <SelectValue placeholder="Servicos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="servicos_tatu">Tatuagem</SelectItem>
                  <SelectItem value="servicos_cabelo">Cabelo</SelectItem>
                  <SelectItem value="servicos_maquiagem">Maquiagem</SelectItem>
                  <SelectItem value="servicos_spa">Spa</SelectItem>
                  <SelectItem value="servicos_outros">Outros</SelectItem>
                </SelectContent>
              </Select>

              <Button className="md:w-80">Buscar</Button>
            </div>
          </div>
          <div className="grid mt-32 mx-9 grid-cols-1 md:grid-cols-2">
            <Image
              className="rounded-lg shadow-md aspect-video"
              alt="Cabelos Image Maquiagem Agendamento"
              height="550"
              src="/ServuicoStudioVip.jpg"
              width="550"
            />
            <div className="">
              <h1 className="font-bold  text-4xl my-4 w-full text-center md:text-start">
                Agendamento Online
              </h1>
              <p className="mt-2 text-muted-foreground ">
                s simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type
              </p>
              <div className="flex gap-7 mt-8 justify-center items-center md:justify-start">
                <div className="flex items-center justify-center flex-col ">
                  <h2 className="font-bold text-2xl md:text-6xl lg:text-6xl xl:text-6xl">
                    8k+
                  </h2>
                  <p className="font-bold">Clientes</p>
                </div>
                <div className="flex items-centerjustify-center flex-col">
                  <h2 className="font-bold text-2xl md:text-6xl lg:text-6xl xl:text-6xl">
                    6k+
                  </h2>
                  <p className="font-bold">Produtos </p>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <h2 className="font-bold text-2xl md:text-6xl lg:text-6xl xl:text-6xl">
                    2k+
                  </h2>
                  <p className="font-bold">Empresas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 flex justify-center flex-col">
            <h1 className="font-bold text-4xl md:text-6xl w-full text-center">
              Por que escolher-nos
            </h1>
b
            <p className="font-medium text-center mt-4 mx-4">
              Agendamento e gestao Financeira para empreendedores com excelencia
              e servicos personalizados de qualidade superior
            </p>
          </div>

          <div className="grid grid-cols-1 place-items-center md:flex lg:flex items-center justify-center mt-12 mx-9 gap-6 ">
            <Card className="w-80">
              <CardHeader>
                <SparkleIcon />
                <CardTitle>Loja Virtual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-40">
                  {" "}
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>
              </CardContent>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <SparkleIcon />
                <CardTitle>Agendamento Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-40">
                  {" "}
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>
              </CardContent>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <SparkleIcon />
                <CardTitle>Controle Financeiro</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-40">
                  {" "}
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>
              </CardContent>
            </Card>

            <Card className="w-80">
              <CardHeader>
                <SparkleIcon />
                <CardTitle>Marketing Integrado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="w-40">
                  {" "}
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 mx- flex justify-center">
            <Carousel className="w-full max-w-sm md:max-w-6xl">
              <CarouselContent>
                <CarouselItem className="basis-2/3">
                  <div>
                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="flex space-y-4">
                        <div>
                          <h1 className="font-bold">Dhan - tatto</h1>
                          <h1>Jardim Belval - Barueri</h1>
                          <Button>Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-2/3">
                  <div>
                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="space-y-4 flex">
                        <div>
                          <h1 className="font-bold">Sofia - Spa</h1>
                          <h1>Osasco - Leopodina</h1>
                          <Button>Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-2/3">
                  <div>
                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="space-y-4 flex">
                        <div>
                          <h1 className="font-bold">Joana - Maquiagem</h1>
                          <h1>Sjn- Sao Roque</h1>
                          <Button>Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>

                <CarouselItem className="basis-2/3">
                  <div>
                    <Card className="w-fit  mt-12">
                      <CardHeader>
                        <Image
                          height={320}
                          width={190}
                          alt="Tatuagem tato servicos agendamentos"
                          src={"/tatto.jpg"}
                        />
                      </CardHeader>
                      <CardContent className="space-y-4 flex">
                        <div>
                          <h1 className="font-bold">Felix - Barbearia</h1>
                          <h1>Centro - Itapevi</h1>
                          <Button>Marcar</Button>
                        </div>
                        <div className="flex bg-yellow-400 h-fit rounded-full px-2 items-center gap-1 -translate-y-4">
                          <StarsIcon size={14} />
                          <p>5.0</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="flex justify-center mt-10">
            <h1 className="font-bold text-2xl">
              Voce tem alguma pergunta ? Obtenha ajuda nossa{" "}
            </h1>
          </div>

          <div className="flex justify-center gap-3 mt-4">
            <SearchInputWithIcon>
              <Mail />
            </SearchInputWithIcon>
            <Button>Enviar</Button>
          </div>
        </section>
      </main>
    </>
  );
}
