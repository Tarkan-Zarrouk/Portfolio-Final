export default function footer() {
    return (
        // should contain copyright based on Date
        <footer>
            &copy; {new Date().getFullYear()}
        </footer>
    )
}