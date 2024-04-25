import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Book } from './schemas/book.schema';
import { Injectable } from '@nestjs/common';


@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookmodel: mongoose.Model<Book>
    ){}


    async findAll(): Promise<Book[]>{
        const books = await this.bookmodel.find()
        return books
    }
}
