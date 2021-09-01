import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const file = request.file as Express.Multer.File;

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: file.filename,
    });

    return response.json(user);
  }
}

export default UserAvatarController;
