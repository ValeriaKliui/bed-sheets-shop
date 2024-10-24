export default function getNumberFromPx(px: string) {
    return Number(px.slice(0, -2));
}