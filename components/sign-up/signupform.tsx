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

export function SignUpForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    password: "",
    role: "",
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Données du formulaire :", formData);
  };

  return (
    <div className="m-auto space-y-4">
      <TypographyH4 className="bg-primary text-white text-center p-2 rounded w-[90%] m-auto">
        Inscription
      </TypographyH4>
      <form
        className="pt-8 pb-5 space-y-4 w-full border border-gray-40 rounded px-4"
        onSubmit={handleSubmit}
      >
        <div className="w-[50%] m-auto space-y-4">
          {preview ? (
            <div className="relative w-24 h-24 rounded-full overflow-hidden m-auto">
              <Image
                src={preview}
                alt="Aperçu"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ) : (
            <User className="border border-gray-300 rounded-full w-24 h-24 p-2 m-auto" />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mr-20 text-[0.9rem]"
          />
        </div>
        <Input
          placeholder="Nom"
          type="text"
          id="nom"
          value={formData.nom}
          onChange={handleChange}
        />
        <Input
          placeholder="tossemoro@gmail.com"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Mot de passe"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, role: value }))}>
          <SelectTrigger  className="w-full">
            <SelectValue placeholder="Administrateur" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="administrateur">Administrateur</SelectItem>
              <SelectItem value="stagiaire">Stagiaire</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button type="submit" className="w-full">S&apos;inscrire</Button>
      </form>
    </div>
  );
}
