// src/components/layout/Footer.jsx

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8">
      <p className="text-sm text-slate-500">
        © {currentYear} Hikmal Ryvaldi Pelu😶‍🌫️. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
