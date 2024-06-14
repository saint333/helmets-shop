import { menu } from "@/mocks/menu";
import ItemMenu from "@/ui/menu/MenuItem";

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-12 justify-center">
        {menu.map((item) => (
          <ItemMenu key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  )
}
