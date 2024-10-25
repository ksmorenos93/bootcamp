import { Controller, Post, UseInterceptors, UploadedFile, Get, Param, Res} from '@nestjs/common';
import { FileInterceptor} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import {Response} from 'express';

@Controller('users')
export class UsersController {

  @Post('upload-image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './dist/modules/uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
      limits: { fileSize: 1024 * 1024 * 2 }, // 2MB
    }),
  )
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'Image uploaded',
      file,
    }
  }

  @Get('download-image/:filename')
  downloadImage(@Param('filename') filename: string, @Res() res: Response) {
    const filePath = join(__dirname, '..', 'uploads', filename);
    res.sendFile(filePath);
  }

}
