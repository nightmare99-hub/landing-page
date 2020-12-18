import { ServiceService } from './service.service';
import { Component, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-lienhe',
  templateUrl: './lienhe.component.html',
  styleUrls: ['./lienhe.component.css']
})
export class LienheComponent implements OnInit {

  constructor(private service:ServiceService) { }


  @Input() sign:any;
  sign_id:number;
  sign_name:string;
  sign_phone:string;
  course:string;
  sign_note:string;


  CourseList :any=[];


  ngOnInit(): void {
    this.loadCourseList();
  }

  loadCourseList(){
    this.service.getAllCourse().subscribe((data:any) =>
      {
        this.CourseList=data;

        this.sign_id= this.sign.sign_id;
        this.sign_name = this.sign.sign_name;
        this.sign_phone = this.sign.sign_phone;
        this.course =this.sign.course;
        this.sign_note=this.sign.sign_note;

      }
      )
  }
  addSign(){
    var val ={sign_id:this.sign_id, sign_name:this.sign_name,sign_phone:this.sign_phone,
      course:this.course,sign_note:this.sign_note
    };
    this.service.addSign(val).subscribe(res=>
        alert(res.toString())
      );
  }

}
