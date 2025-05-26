import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from './dialog-form/dialog-form.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  standalone: true,
  styleUrls: ['./dialog.component.scss'],
  imports: [CommonModule, MatButtonModule],
})
export class DialogComponent {
  submittedData: any = null;

  constructor(private dialog: MatDialog) {}

  openFormDialog(): void {
    const dialogRef = this.dialog.open(DialogFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.submittedData = result;
      }
    });
  }
}
