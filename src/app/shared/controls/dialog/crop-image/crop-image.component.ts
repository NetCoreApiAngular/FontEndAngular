import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FileModel } from 'src/app/shared/models/file/file.model';
import { Configs } from 'src/app/shared/common/configs/configs';

@Component({
    selector: 'app-crop-image',
    styleUrls: ['./crop-image.component.scss'],
    templateUrl: './crop-image.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class CropImageComponent implements OnInit {
    @Input() visible = false;
    @Input() header = '';
    @Input() preview = false;
    @Output() confirm: EventEmitter<any> = new EventEmitter();;
    @ViewChild('imageCroperInput') InputFile: ElementRef

    imageChangedEvent: any = '';
    imageModel: FileModel = new FileModel();
    imageValidationMsg: string;
    ngOnInit(): void { }

    fileChangeEvent(event: any): void {
        if (event) {
            this.imageChangedEvent = event;
            this.visible = true;
            let file: File = event.target.files && <File>event.target.files[0];
            if (file) {
                this.imageModel.fileName = file.name;
                this.imageModel.mediaType = file.type;

                this.imageValidationMsg = Configs.validateFile(
                    file,
                    [Configs.AllImageExtensions],
                    Configs.FileMaximunSize,
                );
                var reader = new FileReader();
                if (!this.imageValidationMsg) {
                    reader.onload = (e: any) => {
                        this.imageModel.data = e.target.result;
                    };
                } else {
                    this.imageModel.data = null;
                }
                reader.readAsDataURL(file);
            }
        }
    }

    imageCropped(event: any) {
        this.imageModel.data = event.base64;
    }

    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    selectImage() {
        this.InputFile.nativeElement.click()
    }

    onConfirm() {
        this.visible = false;
        if (this.imageModel) {
            const imageBlob = this.convertBase64ToBlob(this.imageModel.data);
            const file = new File([imageBlob], this.imageModel.fileName, { type: 'image/png' });
            if (file) {
                this.imageModel.fileName = file.name;
                this.imageModel.mediaType = file.type;

                this.imageValidationMsg = Configs.validateFile(
                    file,
                    [Configs.AllImageExtensions],
                    Configs.FileMaximunSize,
                );
                var reader = new FileReader();
                if (!this.imageValidationMsg) {
                    reader.onload = (e: any) => {
                        this.imageModel.data = e.target.result;
                    };
                } else {
                    this.imageModel.data = null;
                }
                reader.readAsDataURL(file);
                this.imageModel.file = file;
            }
        }
        this.confirm.emit(this.imageModel);
    };

    convertBase64ToBlob(base64) {
        var arr = base64.split(',')
        const byteString = atob(arr[1]);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
          int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/png' });    
        return blob;
     }

    onClose = () => {
        this.visible = false;
        this.confirm.emit(false);
    };

}
