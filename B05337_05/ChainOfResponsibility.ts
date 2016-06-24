module Westeros.JudicialSystem{

  export class Complaint{
    public ComplainingParty: string= "";
    public ComplaintAbout: string ="";
    public Complaint: string="";
  }

  export interface ComplaintListener{
    IsInterestedInComplaint(complaint: Complaint): boolean;
    ListenToComplaint(complaint: Complaint): string;
  }

  export class ClerkOfTheCourt implements ComplaintListener{
    IsInterestedInComplaint(complaint: Complaint): boolean{
      //decide if this is a complaint which can be solved by the clerk
      return false;
    }


    ListenToComplaint(complaint: Complaint): string{
      //perform some operation
      //return solution to the complaint
      return "";
    }
  }

  export class King implements ComplaintListener{
    IsInterestedInComplaint(complaint: Complaint): boolean{
      return true;
    }

    ListenToComplaint(complaint: Complaint): string{
      //perform some operation
      //return solution to the complaint
      return "";
    }
  }

  export class ComplaintResolver{
    complaintListeners: ComplaintListener[];
    constructor(){
      this.complaintListeners = new Array<ComplaintListener>();
      this.complaintListeners.push(new ClerkOfTheCourt());
      this.complaintListeners.push(new King());

    }

    public ResolveComplaint(complaint: Complaint): string{
      for(var i = 0; i<this.complaintListeners.length; i++)
      {
        if(this.complaintListeners[i].IsInterestedInComplaint(complaint))
        {
          return this.complaintListeners[i].ListenToComplaint(complaint);
        }
      }
    }
  }

}
