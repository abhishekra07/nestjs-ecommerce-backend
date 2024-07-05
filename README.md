# Ecommerce Backend

This NestJS project aims to create robust REST APIs for a production-ready e-commerce backend. It follows best practices by separating concerns into Controllers, Services, and Repositories for managing different parts of the application. Security is a priority, implementing strong authentication and authorization measures to protect the system. Additionally, the project integrates with third-party APIs such as SendGrid or Brevo for functionalities like sending customer emails.

Note: Here I didn't focus on microservice architecture as its more of learning project

## Project Structure

        .
        src
        ├── user
        │ ├── dto
        │ │ └── create-user.dto.ts
        | | └── update-user.dto.ts
        │ ├── entities
        │ │ └── user.entity.ts
        │ ├── repository
        │ │ └── user.repository.ts
        │ ├── user.service.ts
        │ ├── user.controller.ts
        │ └── user.module.ts
        ├── product
        │ ├── dto
        │ │ └── create-product.dto.ts
        │ ├── entities
        │ │ ├── product.entity.ts
        │ │ └── category.entity.ts
        │ │ └── brand.entity.ts
        │ ├── repository
        │ │ └── product.repository.ts
        │ ├── product.service.ts
        │ ├── product.controller.ts
        │ └── product.module.ts

## Packages Used

### 1. TypeORM with Mysql For Databse

```javascript

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';


TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
    type: 'mysql',
    host: configService.get('DB_HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_DATABASE_NAME'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: configService.get<boolean>('DB_SYNC'),
    }),
})
```

## Third Party Integrations

#### Brevo.io with Nodemailer

```javascript

import { MailerModule } from '@nestjs-modules/mailer';


MailerModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: async (configService: ConfigService) => ({
    transport: {
        host: configService.get<string>('EMAIL_HOST'),
        port: 587,
        auth: {
        user: configService.get<string>('EMAIL_USERNAME'),
        pass: configService.get<string>('EMAIL_PASSWORD'),
        },
    },
    }),
    inject: [ConfigService],
})
```
