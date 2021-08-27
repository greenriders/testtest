import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';


@Module({
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'in-v3.mailjet.com',
                port: 587,
                ignoreTLS: true,
                secure: false,
                auth: {
                    user: 'fd0750a6bff027bd30b12e1717bff7ad',
                    pass: '3cd09301a72e6b14fa12e77b16f258d0',
                },
            },
        }),
    ],
    providers: [MailService],
    exports: [MailService]
})
export class UtilsModule { }
