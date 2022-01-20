import * as bcrypt from 'bcrypt'

export function Bcrypt() {
  const saltRounds = 10
  if (!new.target) {
    return {
      /**
       *
       * @param passwordInput original password string
       * @param passwordDb hashed passwrod to compare from
       */
      isPasswordCorrect(passwordInput: string, passwordDb: string): boolean {
        return bcrypt.compareSync(passwordInput, passwordDb)
      },
      generatePassword(passwordInput: string) {
        return bcrypt.hashSync(passwordInput, saltRounds)
      },
    }
  }
}
