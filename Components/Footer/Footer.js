import Link from "next/link";

const Footer = () => {
  const yearNow = new Date().getFullYear();
  return (
    <>
      <footer className="">
        <p className="font-bold text-xl flex justify-center py-8">
          Copyright By
          <Link href="https://github.com/Hasan-Rifat">
            <a target="_blank">
              <span className="text-primary mx-2">Hasan Rifat</span>
            </a>
          </Link>
          {yearNow}
        </p>
      </footer>
    </>
  );
};

export default Footer;
