export default function getbaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'http://localhost:3001/' : '/';
}
