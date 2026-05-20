const phone_number = '21992297848'

export const phone = phone_number.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')

export const whatsAppUrl = (message?: string): string => {
    const text = encodeURI(message ? message : 'Oi Bia. Queria saber mais sobre ')

    return `https://wa.me/+55${phone_number}?text=${text}`
}