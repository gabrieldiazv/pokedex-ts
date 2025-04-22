# 🧬 Pokédex App

Una Pokédex moderna hecha con **React + TypeScript**, usando **TailwindCSS** para el diseño y **React Query** para el manejo de datos desde la [PokéAPI](https://pokeapi.co/).

## 🚀 Características

- ✅ Lista paginada de Pokémon (con navegación suave)
- 🔍 Búsqueda por nombre (con resultado dinámico)
- 📄 Página de detalle para cada Pokémon
- 🎨 UI responsive con diseño personalizado estilo Pokédex
- 📦 Caching de datos con React Query
- 📚 Tipado estricto con TypeScript
- 🧠 Navegación inteligente (vuelve a la página anterior correctamente)

## 🖼 Vista previa

![demo pokedex](https://rococo-marigold-f4203c.netlify.app/) <!-- (opcional, puedes poner un gif o screenshot si quieres) -->

## 📦 Tecnologías usadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TanStack React Query](https://tanstack.com/query/latest)
- [React Router DOM](https://reactrouter.com/)

---

## 📁 Estructura de carpetas

```bash
src/
├── components/        # Componentes reutilizables (Header, Body, Card, etc.)
├── features/pokemon/  # Lógica del módulo Pokémon (hooks, servicios, tipos)
├── hooks/             # Custom hooks (búsqueda, listas, detalles)
├── pages/             # Páginas principales (Detalle, Home)
├── types/             # Tipos globales y por feature
├── utils/             # Funciones auxiliares
├── App.tsx            # Configuración de rutas y layout
├── main.tsx           # Punto de entrada principal
