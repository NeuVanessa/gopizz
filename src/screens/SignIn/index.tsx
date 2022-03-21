import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";

import brandImg from "@assets/brand.png";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Container,
  Content,
  Title,
  Brand,
  ForgotPasswordButton,
  ForgotPasswordLabel,
} from "./styles";



export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassord] = useState("");

  function SignInOu() {
    return (
        <View></View>

    )
  }

  

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <Content>
          <Brand source={brandImg} />

          <Title>Login</Title>

          <Input
            placeholder="E-mail"
            type="secondary"
            autoCorrect={false}
            autoCapitalize="none"
          />

          <Input placeholder="Senha" type="secondary" secureTextEntry />

          <ForgotPasswordButton>
            <ForgotPasswordLabel>Esqueci minha Senha</ForgotPasswordLabel>
          </ForgotPasswordButton>

          <Button title="Entrar" type="secondary" />
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}
