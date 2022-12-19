import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/Constants';
import { RestService } from 'src/app/service/rest.service';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss']
})
export class CreateCategoryComponent implements OnInit {

  public categoryForm: FormGroup;
  public categoryList = new Array<Category>();

  constructor(private readonly restService: RestService, private readonly formBuider: FormBuilder,
    private readonly dialogService: DialogService) {

    this.categoryForm = this.formBuider.group({
      id: [null],
      name: [null, [Validators.required]],
      matIcon: [null, Validators.required],
    })
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  public onSubmit(form: FormGroup): void {
    const category = form.value;
    if (category['id']) {
      this.restService.updateCategory(category).subscribe(res => {
        console.log(res);
        this.getCategoryList();
        this.categoryForm.reset();
      });
    }
    else {
      this.restService.addCategory(category).subscribe(res => {
        console.log(res);
        this.dialogService.success.next('Category Added');
        this.getCategoryList();
        this.categoryForm.reset();
      });
    }
  }

  public getCategoryList(): void {
    this.restService.getAllCategories().subscribe(res => {
      this.categoryList = res && res.length ? res : [];
    });
  }

  public editCategory(id: number): void {
    this.restService.getCategoryById(id).subscribe(res => {
      if (res) {
        this.categoryForm.setValue(res);
      } else {

      }
    });
  }
  public deleteCategory(id: number): void {
    this.restService.deleteCategoryById(id).subscribe(() => {
      console.log('deleted');
      this.getCategoryList();
    });
  }
}
