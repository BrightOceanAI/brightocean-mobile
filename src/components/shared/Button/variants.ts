export type ButtonVariantsTyping = 'outline'

export const getButtonVariant = (variant?: ButtonVariantsTyping) => {
  let styles

  switch (variant) {
    case 'outline':
      styles = {
        container: {
          borderWidth: 1,
          backgroundColor: 'transparent',
          borderColor: '#037bfc',
        },

        fontColor: '#037bfc',
      }
      break
    default:
      styles = {
        container: {
          backgroundColor: '#037bfc',
        },

        fontColor: '#fff',
      }
      break
  }

  return styles
}
