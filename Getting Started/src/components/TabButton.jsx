export default function TabButton({children, onSelect}) {
    const handleClick = () => {
        console.log('Hello World')
    }

    return <li><button onClick={onSelect}>{children}</button></li>
}