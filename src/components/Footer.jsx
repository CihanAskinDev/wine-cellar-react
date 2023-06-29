export default function Footer() {

    const currentYear = new Date().getFullYear();
    const gitHubUrl = "https://github.com/CihanAskinDev"

   return (
    <footer>
        <p>&copy;{currentYear}</p>
        <p><a href={gitHubUrl} target="_blank" rel="noreferrer" >See Code in Github</a></p>
    </footer>
   ) 
}