/**
 * Extrai as iniciais de um nome completo
 * @param fullName - Nome completo da pessoa
 * @param maxInitials - Número máximo de iniciais (padrão: 2)
 * @returns String com as iniciais em maiúsculo
 * 
 * @example
 * getInitials("João Silva") // "JS"
 * getInitials("Maria Santos Oliveira") // "MS"
 * getInitials("Pedro") // "P"
 * getInitials("Ana Paula Costa", 3) // "APC"
 */

export const getInitials = (fullName: string, maxInitials: number = 2): string => {
    if(!fullName || typeof fullName !== 'string'){
        return ''
    }
     
    return fullName
        .trim()
        .split('')
        .filter(name => name.length > 0) // Remove espaços extras
        .map(name => name.charAt(0).toLowerCase())
        .slice(0, maxInitials)
        .join('')
}

/**
 * Capitaliza a primeira letra de cada palavra
 * @param text - Texto para capitalizar
 * @returns Texto com primeira letra de cada palavra em maiúsculo
 */

export const capitalize = (text: string): string => {
    if(!text || typeof text !== 'string'){
        return ''
    }

    return text
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')
}

/**
 * Trunca o texto se exceder o tamanho máximo
 * @param text - Texto a ser truncado
 * @param maxLength - Tamanho máximo
 * @param suffix - Sufixo para indicar truncamento (padrão: "...")
 * @returns Texto truncado se necessário
 */
export const truncate = (text: string, maxLength: number, suffix: string = '...'): string => {
  if (!text || text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength - suffix.length) + suffix;
};