import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serachFilter'
})
export class SerachFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args=args.toLowerCase();
    console.log(args);
    return value.filter((data)=>{
      return JSON.stringify(data).toLowerCase().includes(args);
    });
  }

}
