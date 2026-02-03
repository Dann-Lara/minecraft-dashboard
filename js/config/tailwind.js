/**
 * CONFIGURACIÓN DE TAILWIND CSS
 * Ubicación: js/config/tailwind.js
 * * Aquí definimos los colores personalizados (tema oscuro/azul),
 * fuentes y animaciones especiales para la interfaz.
 */

tailwind.config = {
    darkMode: 'class', // Permite alternar modo oscuro manualmente si se desea
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
          mono: ['Monaco', 'Consolas', 'Courier New', 'monospace'], // Ideal para coordenadas
        },
        colors: {
          // Fondo principal (Dark Blue/Black)
          bg: '#0b1220', 
          // Fondo de tarjetas (Ligeramente más claro)
          card: '#111c33', 
          
          // Color de acento principal (Diamond Blue)
          accent: '#3b82f6', 
          accentSoft: '#1e40af', // Versión oscura para hovers
  
          // Colores de estado (Minecraft styles)
          success: '#10b981', // Emerald Green
          danger: '#ef4444',  // Redstone Red
          warning: '#f59e0b', // Gold
          rare: '#d8b4fe',    // Enchanted Purple
        },
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'float': 'float 3s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          glow: {
            'from': { boxShadow: '0 0 10px -10px #3b82f6' },
            'to': { boxShadow: '0 0 20px 5px #3b82f6' },
          }
        }
      }
    }
  }