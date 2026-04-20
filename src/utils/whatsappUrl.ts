export const whatsAppUrl = (message?: string): string => {
    const phone_number = '22992392537'
    const text = encodeURI(message ? message : 'Oi Bia. Queria saber mais sobre ')

    return `https://wa.me/+55${phone_number}?text=${text}`
}