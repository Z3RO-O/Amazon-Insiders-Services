# Amazon Insiders Services

## About the Project

Amazon Insiders Services is a modern web application built with React, TypeScript, and Vite. It serves as a platform to showcase and interact with various services, featuring a responsive UI with components for service browsing, ordering forms, payment simulations, and more. The app utilizes Tailwind CSS for styling, Radix UI for accessible components, Embla Carousel for sliders, and Framer Motion for animations.

Key features include:

- Home and Services pages
- Interactive service carousel
- Order form and payment card components
- Whatsapp Message Generation on Submitting Order form
- Snow effect and go-to-top functionality

This project demonstrates best practices in React development with a focus on user experience and performance.

## Folder Structure

The project is organized as follows:

```
Amazon-Insiders-Services/
├── components.json
├── eslint.config.js
├── index.html
├── node_modules/
├── package-lock.json
├── package.json
├── public/
│   └── icon.svg
├── README.md
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── Footer.tsx
│   │   │   ├── GoToTop.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── OrderForm.tsx
│   │   │   ├── PaymentCard.tsx
│   │   │   ├── ServicesCarousel.tsx
│   │   │   └── SnowEffect.tsx
│   │   ├── specific/
│   │   └── ui/
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── dialog.tsx
│   │       ├── input.tsx
│   │       ├── separator.tsx
│   │       └── textarea.tsx
│   ├── data/
│   │   └── services.ts
│   ├── index.css
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── Services.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

This structure separates concerns: UI components in `components/ui`, shared components in `components/common`, pages in `pages`, and data/utilities in their respective folders.

## How to Run Locally

To run this project on your local machine, follow these steps:

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/amazon-insiders-services.git
   cd amazon-insiders-services
   ```

2. Install dependencies:

   ```
   npm install
   ```

### Running the App

- Start the development server:

  ```
  npm run dev
  ```

  The app will be available at `http://localhost:5173` (or the port specified in the console).

- Build for production:

  ```
  npm run build
  ```

- Preview the production build:

  ```
  npm run preview
  ```

- Run linting:

  ```
  npm run lint
  ```

## Development Notes

This project uses Vite for fast development with HMR. It includes ESLint for code quality. For expanding the ESLint configuration, refer to the original Vite template documentation.

If you encounter any issues, ensure your Node.js version is compatible and try deleting `node_modules` and reinstalling.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
