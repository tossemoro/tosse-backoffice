"use client";

import { TypographyH4 } from "../ui/typographies";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as React from "react";
import { User, Eye, EyeOff } from "lucide-react"; 
import { useState } from "react";

export function SignInForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const ADMIN_CREDENTIALS = {
    email: "admin@example.com",
    password: "admin123", 
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setIsLoading(true);
    setError(null); 


    if (
      formData.email === ADMIN_CREDENTIALS.email &&
      formData.password === ADMIN_CREDENTIALS.password
    ) {
      console.log("Connexion réussie !");
      alert("Connexion réussie !");
      // Redirection vers le tableau de bord ou autre logique
      // Exemple : router.push("/admin-dashboard");
    } else {
      setError("Email ou mot de passe incorrect.");
    }

    setIsLoading(false); 
  };

  return (
    <div className="m-auto max-w-md space-y-6 p-6 border rounded shadow-lg">
      <TypographyH4 className="bg-primary text-white text-center p-2 rounded">
        Connexion 
      </TypographyH4>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4">
          <User className="w-16 h-16 text-primary" />
        </div>

        <Input
          placeholder="Email administrateur"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="relative">
          <Input
            placeholder="Mot de passe"
            type={showPassword ? "text" : "password"} 
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="pr-10" 
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Connexion..." : "Se connecter"}
        </Button>
      </form>
    </div>
  );
}
