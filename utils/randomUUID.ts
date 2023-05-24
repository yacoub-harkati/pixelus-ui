import crypto from "crypto"

export default function randomUUID() {
  return crypto.randomBytes(16).toString("hex")
}
