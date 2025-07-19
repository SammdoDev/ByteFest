const ContactSection: React.FC = () => {
  const handleScrollDown = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">CodeWithSamm</h3>
          <p className="text-sm text-gray-400 max-w-sm">
            Platform pembelajaran interaktif untuk memulai perjalanan coding
            Anda dari dasar hingga mahir.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Navigasi</h4>
          <ul className="space-y-1 text-sm">
            <li>
              <a
                href="#beranda"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollDown("beranda");
                }}
                className="hover:text-blue-400"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollDown("about");
                }}
                className="hover:text-blue-400"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollDown("benefits");
                }}
                className="hover:text-blue-400"
              >
                Benefits
              </a>
            </li>
            <li>
              <a
                href="#modul"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollDown("modul");
                }}
                className="hover:text-blue-400"
              >
                Modul
              </a>
            </li>
            <li>
              <a
                href="#membership"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollDown("membership");
                }}
                className="hover:text-blue-400"
              >
                membership
              </a>
            </li>
            <li>
              <a
                href="#review"
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollDown("review");
                }}
                className="hover:text-blue-400"
              >
                Review
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Kontak</h4>
          <p className="text-sm text-gray-400">Email: info@codewithsamm.com</p>
          <p className="text-sm text-gray-400">Instagram: @codewithsamm</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} CodeWithSamm. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactSection;
