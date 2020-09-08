import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  // tslint:disable-next-line: max-line-length
  lilyAndDogs = 'https://photosgd.blob.core.windows.net/new/lilyanddogs.jpg?sp=r&st=2020-09-08T01:01:12Z&se=2022-09-08T09:01:12Z&spr=https&sv=2019-12-12&sr=b&sig=sAl5WnoLboI2PioP4FcGnpiA6Z%2F9GMDnq40TR6Mgvvs%3D';
  // tslint:disable-next-line: max-line-length
  meAndMrButt = 'https://photosgd.blob.core.windows.net/new/memrbutt.jpg?sp=r&st=2020-09-08T00:57:19Z&se=2022-09-08T08:57:19Z&spr=https&sv=2019-12-12&sr=b&sig=RjBM6x8lItlsQbkELVNLXUEkpQ19uOKHKaDpKkhAFiU%3D';
  // tslint:disable-next-line: max-line-length
  mrButt = 'https://photosgd.blob.core.windows.net/new/mrbutt.jpg?sp=r&st=2020-09-08T00:57:51Z&se=2022-09-08T08:57:51Z&spr=https&sv=2019-12-12&sr=b&sig=iKmxEZS%2BLqkfICO1IGGDte80TOcILdbAtJT3UP3jJkg%3D';
  // tslint:disable-next-line: max-line-length
  lilyAndMe = 'https://photosgd.blob.core.windows.net/new/lilyandme.jpg?sp=r&st=2020-09-08T00:58:32Z&se=2022-09-08T08:58:32Z&spr=https&sv=2019-12-12&sr=b&sig=%2B41y34X1rtX9I2swboPWfjEo8kshQ3D9unWwyvUaEy0%3D';
  // tslint:disable-next-line: max-line-length
  natashaAndFam = 'https://photosgd.blob.core.windows.net/new/natashaandfam.jpg?sp=r&st=2020-09-08T00:58:54Z&se=2022-09-08T08:58:54Z&spr=https&sv=2019-12-12&sr=b&sig=VVsTQWy2Nd%2F0N8V86LmejNmivy02ap1%2B0AO5R4%2F42ow%3D';
  // tslint:disable-next-line: max-line-length
  natasha = 'https://photosgd.blob.core.windows.net/new/natasha.jpg?sp=r&st=2020-09-08T00:59:12Z&se=2022-09-08T08:59:12Z&spr=https&sv=2019-12-12&sr=b&sig=Vo05lwyXiJ8FtsV0QuwNAVvVnKQzQ0pyVCjsd4VqEV8%3D';
  // tslint:disable-next-line: max-line-length
  bixby = 'https://photosgd.blob.core.windows.net/new/bixby.jpg?sp=r&st=2020-09-08T00:54:41Z&se=2022-09-08T08:54:41Z&spr=https&sv=2019-12-12&sr=b&sig=fs2dImtMVH24Y%2F678ngUer30z7eBQ0vjZEUHix62ErE%3D';
  // tslint:disable-next-line: max-line-length
  ramona = 'https://photosgd.blob.core.windows.net/new/ramonacar.jpg?sp=r&st=2020-09-08T01:00:05Z&se=2022-09-08T09:00:05Z&spr=https&sv=2019-12-12&sr=b&sig=hi0%2B2q938CgGCdeiJw89lDWf9Qc%2FIRAAqxd8P7h%2Bt%2FQ%3D';
  // tslint:disable-next-line: max-line-length
  squittens = 'https://photosgd.blob.core.windows.net/new/squittens.jpg?sp=r&st=2020-09-08T01:00:28Z&se=2022-09-08T09:00:28Z&spr=https&sv=2019-12-12&sr=b&sig=W78xzWUEiZVxyCJdFMJmdBDq5RmDuuH2LJcufCA5aFg%3D';
  // tslint:disable-next-line: max-line-length
  dressedUp = 'https://photosgd.blob.core.windows.net/new/IMG_0017.jpg?sp=r&st=2020-08-19T11:25:42Z&se=2022-08-19T19:25:42Z&spr=https&sv=2019-12-12&sr=b&sig=X%2BAwLL1LxkfMJAnNA3OTNxrZVnPUJfbwa1%2BBHH%2BbGYo%3D';
  // tslint:disable-next-line: max-line-length
  fableAndMe = 'https://photosgd.blob.core.windows.net/new/IMG_0019.jpg?sp=r&st=2020-08-19T11:27:35Z&se=2022-08-19T19:27:35Z&spr=https&sv=2019-12-12&sr=b&sig=HKP3NIBYagRFZnVc6CytZlKmizEg40NQU%2Bb68ev5PNI%3D';


  cardTallClass = 'card-tall';
  modalRef: BsModalRef;
  source: string;
  content: string;

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>, source: string, content: string) {
    console.log(template);
    this.source = source;
    this.content = content;
    this.modalRef = this.modalService.show(template);
  }

}
