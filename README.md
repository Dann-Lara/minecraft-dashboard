# Minecraft Progress Dashboard

> Track your Minecraft survival progress with a modern, modular dashboard.

A comprehensive single-page application designed to help Minecraft players track their survival progress across multiple categories: coordinates, farms, enchantments, equipment combinations, resources, potions, bosses, and infrastructure. Built with vanilla JavaScript, Tailwind CSS, and a service-oriented architecture.

- **Live site**: (add URL when deployed)
- **Author**: DANN LARA
- **Version**: 1.0.0

---

## Table of Contents (EN)

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture](#architecture)
- [Usage](#usage)
- [Data Management](#data-management)
- [Deployment](#deployment)
- [License](#license)
- [Sección en Español](#sección-en-español)

---

## Overview

Minecraft Progress Dashboard is a client-side Single Page Application (SPA) that provides a centralized interface for tracking survival progress. The application uses a modular architecture with dynamic section loading, local storage persistence, and a service layer for data management.

### Key Capabilities

- **Progress Tracking**: Monitor completion status across 8 main categories
- **Coordinate Management**: Store and organize location data for bases, farms, and points of interest
- **Equipment Tracking**: Track enchantment combinations and equipment sets
- **Resource Management**: Monitor resource collection and farming progress
- **Data Persistence**: All data is stored locally with export/import functionality
- **Dark Mode**: Optimized dark theme for extended gaming sessions

## Features

- **📍 Coordinates System**: Organize locations by site type (base, farm, structure, etc.)
- **🌾 Farms Tracker**: Track completion of various farm types
- **📖 Enchantments**: Monitor enchantment combinations and levels
- **⚔️ Equipment Sets**: Track optimal equipment combinations
- **💎 Resources**: Monitor resource collection progress
- **🧪 Potions**: Track potion brewing progress
- **👹 Bosses**: Track boss defeats and achievements
- **🏗️ Infrastructure**: Monitor infrastructure and meta progress
- **💾 Data Export/Import**: Backup and restore your progress
- **🎨 Dark Mode**: Eye-friendly dark theme optimized for gaming

## Tech Stack

- **Vanilla JavaScript (ES Modules)**: Modular, framework-free architecture
- **Tailwind CSS (CDN)**: Utility-first styling with custom configuration
- **Service Layer Pattern**: Separation of concerns with dedicated service modules
- **LocalStorage API**: Client-side data persistence
- **Dynamic Module Loading**: Lazy loading of sections for optimal performance

## Project Structure

```text
minecraft-dashboard/
  index.html              # Root HTML shell
  assets/
    styles.css            # Global styles and custom CSS
    icons/                # Minecraft-themed icons and sprites
  js/
    config/
      sections.js         # Section configuration and routing
      settings.js         # Global app settings
      tailwind.js         # Tailwind CSS custom configuration
    core/
      loader.js           # Dynamic section loader and app initialization
      storage.js          # LocalStorage wrapper and data management utilities
    components/
      navbar.js           # Navigation bar component
      footer.js           # Footer component with export/import/reset actions
    services/
      api.client.js       # Generic API client for data operations
      *.service.js        # Service modules for each section (coords, farms, etc.)
    sections/
      {section}/          # Individual section modules
        {section}.html    # Section HTML template
        {section}.js      # Section initialization and logic
    data/
      *.js                # Data definitions and initial state
```

## Architecture

The application follows a **service-oriented architecture** pattern:

1. **Configuration Layer**: `js/config/` defines app settings, section routing, and UI configuration
2. **Core Layer**: `js/core/` handles app initialization, dynamic loading, and storage management
3. **Service Layer**: `js/services/` provides data access and business logic abstraction
4. **Component Layer**: `js/components/` contains reusable UI components
5. **Section Layer**: `js/sections/` contains self-contained section modules

### Dynamic Loading

Sections are loaded on-demand using ES6 dynamic imports:
- Active section loads immediately
- Other sections load in the background after initial render
- Each section is self-contained with its own HTML template and JavaScript logic

### Data Flow

```
User Interaction → Service Layer → LocalStorage → UI Update
```

## Usage

### Initial Setup

1. Clone or download the repository
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge, Safari)
3. No build step required — runs natively in the browser

### Tracking Progress

1. Navigate to the desired section using the top navigation bar
2. Interact with checkboxes, inputs, or buttons to mark progress
3. Data is automatically saved to LocalStorage
4. Use the footer actions to export, import, or reset your data

### Export/Import Data

- **Export**: Click the export button in the footer to download a JSON backup
- **Import**: Click the import button and select a previously exported JSON file
- **Reset**: Use the reset button to clear all stored data (requires confirmation)

## Data Management

All progress data is stored in the browser's LocalStorage with the prefix `mc_` to avoid conflicts. The storage system provides:

- **Automatic Persistence**: Changes are saved immediately
- **Version Tracking**: Data version is tracked for future migration support
- **Export Format**: JSON format for easy backup and sharing
- **Import Validation**: Basic validation to ensure imported data is valid

## Deployment

The application is designed to be served as a static SPA:

1. **GitHub Pages**:
   - Enable Pages for the repository
   - Point to the `main` branch (root folder)
   - Ensure `.nojekyll` file exists if using Jekyll-based hosting

2. **Static Hosting**:
   - Upload all files to any static hosting service (Netlify, Vercel, etc.)
   - No server-side configuration required
   - Works with any web server that serves static files

3. **Local Development**:
   - Open `index.html` directly in a browser
   - For ES modules to work properly, use a local server (e.g., `python -m http.server` or `npx serve`)

## License

This project is licensed under the **MIT License**.  
See the `LICENSE` file for full details.

---

## SECCIÓN EN ESPAÑOL

> Rastrea tu progreso en Minecraft con un dashboard moderno y modular.

Una aplicación de una sola página diseñada para ayudar a los jugadores de Minecraft a rastrear su progreso en supervivencia en múltiples categorías: coordenadas, granjas, encantamientos, combinaciones de equipo, recursos, pociones, jefes e infraestructura. Construida con JavaScript vanilla, Tailwind CSS y una arquitectura orientada a servicios.

- **Sitio en vivo**: (agregar URL cuando esté desplegado)
- **Autor**: DANN LARA
- **Versión**: 1.0.0

### Índice

- [Resumen](#resumen)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Arquitectura](#arquitectura-1)
- [Uso](#uso)
- [Gestión de Datos](#gestión-de-datos)
- [Despliegue](#despliegue)
- [Licencia](#licencia-1)

### Resumen

Minecraft Progress Dashboard es una Single Page Application (SPA) del lado del cliente que proporciona una interfaz centralizada para rastrear el progreso en supervivencia. La aplicación utiliza una arquitectura modular con carga dinámica de secciones, persistencia en almacenamiento local y una capa de servicios para la gestión de datos.

### Capacidades Principales

- **Seguimiento de Progreso**: Monitorear el estado de completado en 8 categorías principales
- **Gestión de Coordenadas**: Almacenar y organizar datos de ubicación para bases, granjas y puntos de interés
- **Seguimiento de Equipo**: Rastrear combinaciones de encantamientos y sets de equipo
- **Gestión de Recursos**: Monitorear la recolección de recursos y progreso de granjas
- **Persistencia de Datos**: Todos los datos se almacenan localmente con funcionalidad de exportar/importar
- **Modo Oscuro**: Tema oscuro optimizado para sesiones de juego extendidas

### Características

- **📍 Sistema de Coordenadas**: Organizar ubicaciones por tipo de sitio (base, granja, estructura, etc.)
- **🌾 Rastreador de Granjas**: Rastrear completado de varios tipos de granjas
- **📖 Encantamientos**: Monitorear combinaciones y niveles de encantamientos
- **⚔️ Sets de Equipo**: Rastrear combinaciones óptimas de equipo
- **💎 Recursos**: Monitorear progreso de recolección de recursos
- **🧪 Pociones**: Rastrear progreso de elaboración de pociones
- **👹 Jefes**: Rastrear derrotas de jefes y logros
- **🏗️ Infraestructura**: Monitorear progreso de infraestructura y meta
- **💾 Exportar/Importar Datos**: Respaldar y restaurar tu progreso
- **🎨 Modo Oscuro**: Tema oscuro amigable para los ojos optimizado para gaming

### Tecnologías

- **Vanilla JavaScript (ES Modules)**: Arquitectura modular sin frameworks
- **Tailwind CSS (CDN)**: Estilos utilitarios con configuración personalizada
- **Patrón de Capa de Servicios**: Separación de responsabilidades con módulos de servicio dedicados
- **API de LocalStorage**: Persistencia de datos del lado del cliente
- **Carga Dinámica de Módulos**: Carga diferida de secciones para rendimiento óptimo

### Estructura del Proyecto

```text
minecraft-dashboard/
  index.html              # Estructura HTML base
  assets/
    styles.css            # Estilos globales y CSS personalizado
    icons/                # Iconos y sprites temáticos de Minecraft
  js/
    config/
      sections.js         # Configuración de secciones y enrutamiento
      settings.js         # Configuración global de la app
      tailwind.js         # Configuración personalizada de Tailwind CSS
    core/
      loader.js           # Cargador dinámico de secciones e inicialización
      storage.js          # Wrapper de LocalStorage y utilidades de gestión
    components/
      navbar.js           # Componente de barra de navegación
      footer.js           # Componente de pie con acciones exportar/importar/reset
    services/
      api.client.js       # Cliente API genérico para operaciones de datos
      *.service.js        # Módulos de servicio para cada sección
    sections/
      {section}/          # Módulos de sección individuales
        {section}.html    # Plantilla HTML de la sección
        {section}.js      # Lógica e inicialización de la sección
    data/
      *.js                # Definiciones de datos y estado inicial
```

### Arquitectura

La aplicación sigue un patrón de **arquitectura orientada a servicios**:

1. **Capa de Configuración**: `js/config/` define configuración de app, enrutamiento de secciones y UI
2. **Capa Core**: `js/core/` maneja inicialización, carga dinámica y gestión de almacenamiento
3. **Capa de Servicios**: `js/services/` proporciona acceso a datos y abstracción de lógica de negocio
4. **Capa de Componentes**: `js/components/` contiene componentes UI reutilizables
5. **Capa de Secciones**: `js/sections/` contiene módulos de sección autocontenidos

### Carga Dinámica

Las secciones se cargan bajo demanda usando imports dinámicos de ES6:
- La sección activa se carga inmediatamente
- Otras secciones se cargan en segundo plano después del render inicial
- Cada sección es autocontenida con su propia plantilla HTML y lógica JavaScript

### Flujo de Datos

```
Interacción del Usuario → Capa de Servicios → LocalStorage → Actualización de UI
```

### Uso

#### Configuración Inicial

1. Clona o descarga el repositorio
2. Abre `index.html` en un navegador moderno (Chrome, Firefox, Edge, Safari)
3. No requiere proceso de build — funciona nativamente en el navegador

#### Rastrear Progreso

1. Navega a la sección deseada usando la barra de navegación superior
2. Interactúa con checkboxes, inputs o botones para marcar progreso
3. Los datos se guardan automáticamente en LocalStorage
4. Usa las acciones del pie de página para exportar, importar o resetear tus datos

#### Exportar/Importar Datos

- **Exportar**: Haz clic en el botón de exportar en el pie para descargar un respaldo JSON
- **Importar**: Haz clic en el botón de importar y selecciona un archivo JSON previamente exportado
- **Resetear**: Usa el botón de resetear para limpiar todos los datos almacenados (requiere confirmación)

### Gestión de Datos

Todos los datos de progreso se almacenan en LocalStorage del navegador con el prefijo `mc_` para evitar conflictos. El sistema de almacenamiento proporciona:

- **Persistencia Automática**: Los cambios se guardan inmediatamente
- **Seguimiento de Versión**: La versión de datos se rastrea para soporte futuro de migración
- **Formato de Exportación**: Formato JSON para fácil respaldo y compartición
- **Validación de Importación**: Validación básica para asegurar que los datos importados sean válidos

### Despliegue

La aplicación está diseñada para ser servida como SPA estática:

1. **GitHub Pages**:
   - Activa Pages para el repositorio
   - Apunta a la rama `main` (carpeta raíz)
   - Asegúrate de que exista el archivo `.nojekyll` si usas hosting basado en Jekyll

2. **Hosting Estático**:
   - Sube todos los archivos a cualquier servicio de hosting estático (Netlify, Vercel, etc.)
   - No se requiere configuración del lado del servidor
   - Funciona con cualquier servidor web que sirva archivos estáticos

3. **Desarrollo Local**:
   - Abre `index.html` directamente en un navegador
   - Para que los módulos ES funcionen correctamente, usa un servidor local (ej. `python -m http.server` o `npx serve`)

### Licencia

Este proyecto está licenciado bajo la **Licencia MIT**.  
Consulta el archivo `LICENSE` para ver el texto completo (en inglés).
