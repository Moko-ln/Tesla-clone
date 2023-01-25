const Burger = ({openMenu}:{openMenu: Function}) => {
    return (
        <button className="xl:hidden rounded-sm bg-gray-400/30 py-1 px-2 font-medium" onClick={() => openMenu()}>Menu</button>
    )
}

export default Burger;
