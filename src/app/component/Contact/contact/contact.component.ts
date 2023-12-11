import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/Contact/contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css','../css/animate.css','../css/icomoon.css','../css/bootstrap.css','../css/magnific-popup.css','../css/owl.carousel.min.css','../css/owl.theme.default.min.css','../css/style.css']
})
export class ContactComponent implements OnInit {
  showSpinner= false;
  constructor(public contactService : ContactService) { }

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 500);
  }

  onSubmit(form) {

      const formData = form.value;
      // Assuming you have a method in your ContactService to handle contact creation
      this.contactService.addContact(formData).subscribe(
        (response) => {
          // Handle success, e.g., show a success message
          console.log('Contact created successfully', response);
        },
        (error) => {
          // Handle error, e.g., show an error message
          console.error('Error creating contact', error);
        }
      );

      }
}
