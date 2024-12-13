"use client";
import { TypographyH4 } from "../ui/typographies";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function SignUpForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter()

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
    }
  };

  return (
    <div className="m-auto space-y-4">
      <TypographyH4 className="bg-primary text-white text-center p-2 rounded w-[90%] m-auto">
        Inscription
      </TypographyH4>
      <form className="pt-8 pb-5 space-y-4 w-full border border-gray-40 rounded px-4">
        <div className="w-[50%] m-auto space-y-4">
          <User className="border border-red-50 rounded-[50%] w-full h-full" />
          <input type="file" accept="image/*" onChange={handleFileChange} className="mr-12" />
          {preview && (
            <Image src={preview} alt="Aperçu" style={{ width: "100%" }} />
          )}
        </div>
        <Input placeholder="Nom" type="text" id="nom" />
        <Input placeholder="tossemoro@gmail.com" type="email" id="email" />
        <Input placeholder="Mot de passe" type="password" id="password" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Administrateur" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="administrateur">Administrateur</SelectItem>
              <SelectItem value="stagaire">Stagiaire</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type="submit" onClick={() => router.push('/profile') }>S&apos;inscrire</Button>
      </form>
    </div>
  );
}
