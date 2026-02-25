# App Parceiro - iBelle

Componentes React Native gerados do Figma design system.

## Estrutura

```
src/
├── components/        # Componentes reutilizáveis
│   ├── InputField.tsx
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Text.tsx
│   └── index.ts
├── theme/            # Design tokens
│   └── index.ts
├── types/            # TypeScript definitions
│   └── index.ts
├── screens/          # Telas da aplicação
└── App.tsx          # App principal
```

## Componentes

### InputField
Input text com suporte a múltiplos estados.

**Estados disponíveis:**
- `initial` - Padrão
- `active` - Focado
- `typing` - Digitando
- `success` - Validado
- `error` / `danger` - Erro
- `disabled` - Desabilitado

### Button
Botão com múltiplas variações.

**Variações:**
- `primary` - Botão principal
- `secondary` - Botão secundário
- `outline` - Botão com borda
- `ghost` - Botão transparente

**Tamanhos:**
- `small` - Pequeno
- `medium` - Médio (padrão)
- `large` - Grande

### Card
Container com estilo de card.

### Text
Componente de texto com variações tipográficas.

**Variações:**
- `h1` - Heading 1 (32px)
- `h2` - Heading 2 (28px)
- `h3` - Heading 3 (24px)
- `body` - Corpo do texto (16px)
- `caption` - Legenda (12px)

## Tema

Cores e estilos são centralizados em `src/theme/index.ts`

## Instalação

```bash
npm install
# ou
yarn install
```

## Executar

```bash
# Android
npm run android

# iOS
npm run ios

# Web (Expo)
npm run web
```

## Adaptações do Figma

Este projeto foi gerado a partir do design system do Figma com:
- 208 componentes extraídos
- 20+ cores e fills
- 52 layouts automáticos
- Sistema de sombras (shadows)
- Tipografia padronizada

---

**Criado com ❤️ usando Rube + Figma API + React Native**