import { toastController } from "@ionic/vue";

export default async function showToast(message: string, duration: number, color: string): Promise<void> {
  const toast = await toastController.create({
    message: message,
    duration: duration,
    position: "top",
    color: color,
  });
  await toast.present();
}
