<?php

namespace App\Policies;

use App\User;
use App\Editor;
use Illuminate\Auth\Access\HandlesAuthorization;

class EditorPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any editors.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function viewAny(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can view the editor.
     *
     * @param  \App\User  $user
     * @param  \App\Editor  $editor
     * @return mixed
     */
    public function view(User $user, Editor $editor)
    {
        return true;
    }

    /**
     * Determine whether the user can create editors.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can update the editor.
     *
     * @param  \App\User  $user
     * @param  \App\Editor  $editor
     * @return mixed
     */
    public function update(User $user, Editor $editor)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can delete the editor.
     *
     * @param  \App\User  $user
     * @param  \App\Editor  $editor
     * @return mixed
     */
    public function delete(User $user, Editor $editor)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can restore the editor.
     *
     * @param  \App\User  $user
     * @param  \App\Editor  $editor
     * @return mixed
     */
    public function restore(User $user, Editor $editor)
    {
        return $user->is_admin;
    }

    /**
     * Determine whether the user can permanently delete the editor.
     *
     * @param  \App\User  $user
     * @param  \App\Editor  $editor
     * @return mixed
     */
    public function forceDelete(User $user, Editor $editor)
    {
        return $user->is_admin;
    }
}
