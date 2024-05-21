import frappe
from frappe.model.document import Document
from frappe.model.naming import make_autoname


class LibraryMembership(Document):
    # check before submitting this document
    def before_submit(self):
        exists = frappe.db.exists(
            "Library Membership",
            {
                "library_member": self.library_member,
                "docstatus": 1,
                # check if the membership's end date is later than this membership's start date
                "to_date": (">", self.from_date),
            },
        )
        if exists:
            frappe.throw("There is an active membership for this member")


        # get loan period and compute to_date by adding loan_period to from_date



    def validate(self):
        if self.to_date < self.from_date:
            frappe.throw("<b>ToDate</b> should  not be lesser than <b>FromDate</b>")

    def autoname(self):
        format = "{}".format(self.library_member)
        self.name = make_autoname(format)
