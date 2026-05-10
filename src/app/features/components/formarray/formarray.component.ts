import { Component, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ProductsService } from '@app/core/services/products.service';

@Component({
  selector: 'app-formarray',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    JsonPipe,
    ReactiveFormsModule,
    
  ],
  templateUrl: './formarray.component.html',
  styleUrl: './formarray.component.scss',
})
export class FormarrayComponent {

  private http = inject(HttpClient);
  private fb = inject(FormBuilder);
  private productservices = inject(ProductsService);

  products = toSignal(
    this.productservices.getProducts(),
    { initialValue: { products: [] } as any }
  );

  currentIndex = signal<number>(0);
  submittedData = signal<any>(null);

  form: FormGroup = this.fb.group({
    cart: this.fb.array([])
  });

  cart = computed(() => this.form.get('cart') as FormArray);

  addProduct() {
    const index = this.currentIndex();
    const products = this.products()?.products || [];

    if (index >= products.length) return;

    const product = products[index];

    this.cart().push(
      this.fb.group({
        id: [product.id],
        title: [product.title],
        price: [product.price],
        thumbnail: [product.thumbnail]
      })
    );

    this.currentIndex.set(index + 1);
  }

  removeProduct(index: number) {
    this.cart().removeAt(index);
  }

  submitCart() {
    if (this.cart().length === 0) return;

    this.submittedData.set(this.cart().value);

    this.cart().clear();
    this.currentIndex.set(0);
  }

  clearAll() {
    this.cart().clear();
    this.currentIndex.set(0);
    this.submittedData.set(null);
  }

  isAllAdded() {
    const products = this.products()?.products || [];
    return this.currentIndex() >= products.length;
  }
}