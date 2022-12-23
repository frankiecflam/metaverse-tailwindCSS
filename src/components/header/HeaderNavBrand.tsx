import Link from "next/link";

const HeaderNavBrand = () => {
  return (
    <div>
      <Link href="/">
        <h2 className="uppercase font-extrabold text-2xl leading-[30.24px]">
          Metaversus
        </h2>
      </Link>
    </div>
  );
};

export default HeaderNavBrand;
