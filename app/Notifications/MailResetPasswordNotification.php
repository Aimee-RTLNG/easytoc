<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class MailResetPasswordNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $link = url( "/easytoc/public//password/reset/?token=" . $this->token );

        return (new MailMessage)
                    ->line('Vous recevez ce courriel parce que nous avons reçu une demande de réinitialisation de mot de passe pour votre compte.')
                    ->action('Changer le mot de passe', $link)
                    ->line("Ce lien de réinitialisation de mot de passe expirera dans 60 minutes. Si vous n'avez pas demandé de réinitialisation de mot de passe, aucune autre action n'est requise. Salutations,");
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
