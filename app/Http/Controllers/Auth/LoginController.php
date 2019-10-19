<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;

use App\User; 
use Socialite;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    
    // Connexion Réseaux Sociaux

        public function redirectToProvider($providers)
        {
            return Socialite::driver($providers)->redirect();
        }

        public function handleProviderCallback($providers)
        {
            try {
                $user = Socialite::driver($providers)->user();
            } catch (\Exception $e) {
                return redirect('/login');
            }
            // check if they're an existing user
            $existingUser = User::where('email', $user->email)->first();        
            if($existingUser){
                // log them in
                auth()->login($existingUser, true);
            } else {
                // create a new user
                $newUser                  = new User;
                $newUser->name            = $user->name;
                $newUser->email           = $user->email;
                $newUser->provider        = $providers ;
                $newUser->provider_id       = $user->id;
                $newUser->save();            auth()->login($newUser, true);
            }
            return redirect()->to('/home');
            // $user->token;
        
        }

}
