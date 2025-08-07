# Kondela Dron v2 🚁

A modern, responsive website for drone filming services built with Next.js 15,
TypeScript, and Tailwind CSS.

## Features ✨

- **Modern UI/UX**: Clean, professional design with smooth animations and
  transitions
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**:
  - Image slider with navigation controls
  - Smooth scroll effects and parallax animations
  - Entry animations on scroll using Intersection Observer API
  - Mobile-friendly hamburger navigation
- **Contact Form**: Integrated email functionality with form validation
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **Accessibility**: ARIA-compliant components and keyboard navigation support

## Tech Stack 🛠️

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS variables
- **Forms**: React Hook Form for form validation
- **Email**: Nodemailer for contact form functionality
- **Icons**: React Feather
- **Animations**: CSS transitions with Intersection Observer API

## Project Structure 📁

```
src/
├── app/
│   ├── api/email/          # API route for email functionality
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page
├── components/
│   ├── About.tsx           # About section with parallax effects
│   ├── Contact.tsx         # Contact form with validation
│   ├── Cta.tsx             # Call-to-action section
│   ├── Faq.tsx             # FAQ section
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section with animations
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Scrollbar.tsx       # Custom scroll indicator
│   ├── Seperator.tsx       # Section separator component
│   └── Work.tsx            # Portfolio section with image slider
├── hooks/
│   └── useInView.ts        # Custom hook for scroll animations
├── img/                    # Image assets
└── utils/
    └── send-email.ts       # Email utility functions
```

## Getting Started 🚀

1. **Clone the repository**
   ```bash
   git clone https://github.com/KondelaCoding/kondela-dron-v2.git
   cd kondela-dron-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** Create a `.env.local` file in the root
   directory:
   ```env
   MY_EMAIL=your-email@gmail.com
   MY_PASSWORD=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser** Navigate to
   [http://localhost:3000](http://localhost:3000)

## Key Components 🔧

### Image Slider

- Responsive carousel with navigation arrows and dot indicators
- Infinite loop functionality
- Touch/swipe support for mobile devices

### Scroll Animations

- Custom `useInView` hook for detecting element visibility
- Smooth fade-in and slide-up animations
- Parallax effects on background images

### Contact Form

- Form validation with React Hook Form
- Email integration using Nodemailer
- Success/error state management
- Accessibility features

### Navigation

- Responsive design with mobile hamburger menu
- Smooth scroll to sections
- Dynamic styling based on scroll position

## Environment Variables 🔐

Required environment variables for email functionality:

- `MY_EMAIL`: Your Gmail address
- `MY_PASSWORD`: Gmail app password (recommended) or account password

## Scripts 📝

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing 🤝

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the MIT License.

## Contact 📧

For inquiries about drone filming services, please use the contact form on the
website or reach out directly.
