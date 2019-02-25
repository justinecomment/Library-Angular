import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  submitted = false;
  addBookForm: FormGroup;
  router: any;

  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService
  ) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.addBookForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      alternateTitle: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      isbn: new FormControl('', Validators.required),
      authorId: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
      styleIds: this.formBuilder.array([1])
    });
  }

  private onSubmit() {
    this.submitted = true;

    if (this.addBookForm.invalid) {
      return;
    }

    console.log(this.addBookForm.value);
    this.booksService.add(this.addBookForm.value).subscribe(
      response => {
        // CLOSE MODAL
      }
    )
  }

}
