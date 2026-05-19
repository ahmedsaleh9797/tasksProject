import { CommonModule } from '@angular/common';
import {
  Component,
  effect,
  inject,
  signal
} from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule
} from '@angular/forms';

import { toSignal } from '@angular/core/rxjs-interop';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

import { ConfirmationService } from 'primeng/api';

import { ProductsService } from '@app/core/services/products.service';

@Component({
  selector: 'app-crud-table',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    InputTextModule,
    InputNumberModule
  ],

  providers: [ConfirmationService],

  templateUrl: './crud-table.component.html',
  styleUrl: './crud-table.component.scss',
})

export class CrudTableComponent {

  private productsService = inject(ProductsService);

  private confirmationService = inject(ConfirmationService);

  private fb = inject(FormBuilder);

  private apiProducts = toSignal(
    this.productsService.getProducts(),
    {
      initialValue: { products: [] }
    }
  );

  products = signal<any[]>([]);

  selectedProduct = signal<any | null>(null);

  viewDialog = signal(false);

  editingRowId = signal<number | null>(null);

  productsForm!: FormGroup;

  constructor() {

    effect(() => {

      const apiData = this.apiProducts();

      if (!apiData.products.length) return;

      const savedProducts =
        localStorage.getItem('products');

      const finalProducts = savedProducts
        ? JSON.parse(savedProducts)
        : apiData.products;

      this.products.set(finalProducts);

      if (!savedProducts) {

        localStorage.setItem(
          'products',
          JSON.stringify(finalProducts)
        );

      }

      this.initializeForm();

    });

  }

  initializeForm(): void {

    this.productsForm = this.fb.group({

      products: this.fb.array(

        this.products().map((product: any) =>

          this.fb.group({

            id: [product.id],

            title: [
              {
                value: product.title,
                disabled: true
              }
            ],

            description: [
              {
                value: product.description,
                disabled: true
              }
            ],

            category: [
              {
                value: product.category,
                disabled: true
              }
            ],

            price: [
              {
                value: product.price,
                disabled: true
              }
            ]

          })

        )

      )

    });

  }

  get productsArray(): FormArray {

    return this.productsForm.get('products') as FormArray;

  }

  getProductForm(index: number): FormGroup {

    return this.productsArray.at(index) as FormGroup;

  }

  openView(product: any): void {

    this.selectedProduct.set({ ...product });

    this.viewDialog.set(true);

  }

  editRow(
    index: number,
    productId: number
  ): void {

    this.editingRowId.set(productId);

    this.getProductForm(index).enable();

    this.getProductForm(index)
      .get('id')
      ?.disable();

  }

  saveRow(index: number): void {

    this.confirmationService.confirm({

      message: 'Are you sure you want to save changes?',

      header: 'Confirm Save',

      icon: 'pi pi-exclamation-triangle',

      accept: () => {

        const updatedProduct =
          this.getProductForm(index).getRawValue();

        const updatedProducts = [
          ...this.products()
        ];

        updatedProducts[index] = updatedProduct;

        this.products.set(updatedProducts);

        localStorage.setItem(
          'products',
          JSON.stringify(this.products())
        );

        this.getProductForm(index).disable();

        this.editingRowId.set(null);

        this.confirmationService.close();

      }

    });

  }

  isEditing(productId: number): boolean {

    return this.editingRowId() === productId;

  }

}