export type ButtonVariantsTyping = 'outline'

export const getButtonVariant = (variant?: ButtonVariantsTyping) => {
  let styles

  switch (variant) {
    case 'outline':
      styles = {
        container: {
          borderWidth: 1,
          backgroundColor: 'transparent',
          borderColor: '#2565cc',
        },

        fontColor: '#2565cc',
      }
      break
    default:
      styles = {
        container: {
          backgroundColor: '#2565cc',
        },

        fontColor: '#fff',
      }
      break
  }

  return styles
}
